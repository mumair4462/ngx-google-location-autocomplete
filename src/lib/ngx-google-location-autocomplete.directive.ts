import { AfterViewInit, ChangeDetectorRef, Directive, ElementRef, input, InputSignal, model, ModelSignal, output, OutputEmitterRef } from '@angular/core';
import { Address } from './types/iCore.interface';
import { Options } from './types/options.interface';

declare let google: any;
@Directive({
  selector: '[ngx-google-location-autocomplete]',
  exportAs: 'ngx-location'
})
export class NgxGoogleLocationAutocompleteDirective implements AfterViewInit {
  // This directive can be used to apply Google Location Autocomplete functionality
  // to an input element. Additional logic can be added here as needed.

  public options: ModelSignal<Options | undefined> = model<Options | undefined>( undefined, {alias: 'options'});
  public onAddressChange: OutputEmitterRef<Address> = output<Address>();

  private autocomplete: any;
  public place!: Address;

  public constructor(private el: ElementRef, private cdr: ChangeDetectorRef) { }

  public ngAfterViewInit(): void {
    if (!this.options()) {
      this.options.set(new Options());
    }

    this.initializeLocationAutocomplete();
  }

  private isGoogleLibExists(): boolean {
    return !(!google || !google.maps || !google.maps.places);
  }

  private initializeLocationAutocomplete(): void {
    if (!this.isGoogleLibExists())
      throw new Error("Google maps library can not be found");


    this.autocomplete = new google.maps.places.Autocomplete(this.el.nativeElement, this.options);

    if (!this.autocomplete)
      throw new Error("Autocomplete is not initialized");

    if (!this.autocomplete.addListener != null) { // Check to bypass https://github.com/angular-ui/angular-google-maps/issues/270
      this.autocomplete.addListener('place_changed', () => {
        this.handleChangeEvent()
      });
    }

    this.el.nativeElement.addEventListener('keydown', (event: KeyboardEvent) => {
      if (!event.key) {
        return;
      }

      let key = event.key.toLowerCase();

      if (key == 'enter' && event.target === this.el.nativeElement) {
        event.preventDefault();
        event.stopPropagation();
      }
    });

    // according to https://gist.github.com/schoenobates/ef578a02ac8ab6726487
    if (window && window.navigator && window.navigator.userAgent && navigator.userAgent.match(/(iPad|iPhone|iPod)/g)) {
      setTimeout(() => {
        let containers = document.getElementsByClassName('pac-container');

        if (containers) {
          let arr = Array.from(containers);

          if (arr) {
            for (let container of arr) {
              if (!container)
                continue;

              container.addEventListener('touchend', (e) => {
                e.stopImmediatePropagation();
              });
            }

          }
        }
      }, 500);
    }

  }

  public reset(): void {
    this.autocomplete.setComponentRestrictions(this.options()?.componentRestrictions);
    this.autocomplete.setTypes(this.options()?.types);
  }

  private handleChangeEvent(): void {
    this.place = this.autocomplete.getPlace();

    if (this.place) {
        this.onAddressChange.emit(this.place);
        this.cdr.detectChanges();
    }
}

}
