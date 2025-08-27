# ngx-google-location-autocomplete

An Angular library that integrates the Google Places API to provide location-based autocomplete functionality. Easily add address suggestions with full place details using customizable, lightweight, and developer-friendly directives/components.

## Angular Compatibility

The table below shows which versions of **ngx-google-location-autocomplete** are compatible with which versions of **Angular**.

| ngx-google-location-autocomplete | Angular |
|----------------------------------|---------|
| 1.x.x                            | ^18.x.x |
| 2.x.x                            | ^19.x.x |
| 3.x.x                            | ^20.x.x |

> ℹ️ The library only requires Angular and the Google Maps JavaScript API. No additional runtime dependencies are needed.

# Installation

#### npm

```
npm install ngx-google-location-autocomplete
```

#### yarn

```
yarn add ngx-google-location-autocomplete
```

## Demo

![Watch the demo](https://raw.githubusercontent.com/mumair4462/ngx-google-location-autocomplete/main/assets/demo-thumbnail.gif)

# Integration

1. Add google library in your index.html file :

```
    <script src="https://maps.googleapis.com/maps/api/js?key=<Your API KEY>&libraries=places&language=en"></script>
```

2. Replace <You API KEY> with google places api key. Ref - https://developers.google.com/places/web-service/get-api-key

# Usage

1. Add the directive to the component where you want to use it.

```ts
import { NgxGoogleLocationAutocompleteDirective } from 'ngx-google-location-autocomplete';

@Component({
  standalone: true,
  imports: [NgxGoogleLocationAutocompleteDirective]
  ...
})
```

2. Add directive ngx-google-location-autocomplete to your input field (options is an optional parammeter)

```
<input ngx-google-location-autocomplete [options]='options' #placesRef="ngx-location" (onAddressChange)="handleAddressChange($event)"/>
```

3. Additionally you can reference directive in your component

```ts
    public placesRef: Signal<NgxGoogleLocationAutocompleteDirective | undefined>  = viewChild<NgxGoogleLocationAutocompleteDirective>('placesRef');

    public handleAddressChange(address: Address) {
      // Do some stuff
    }
```

## Options

Refer to original google maps api - https://developers.google.com/maps/documentation/javascript/places-autocomplete
Options object - https://github.com/skynet2/ngx-google-location-autocomplete/blob/master/src/objects/options/options.ts
Google doc for Options : https://developers.google.com/maps/documentation/javascript/reference/places-widget#AutocompleteOptions
Example :

```html
[options]="{ types: [], componentRestrictions: { country: 'UA' } }"
```