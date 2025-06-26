# ngx-google-location-autocomplete

An Angular library that integrates Google Places API to provide location-based autocomplete functionality. Easily add address suggestions with full place details using a customizable, lightweight, and developer-friendly directives/component.

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

[![Watch the demo](demo-thumbnail.gif)](https://github.com/mumair4462/ngx-google-location-autocomplete/assets/demo-thumbnail.webm)


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
    @ViewChild("placesRef") placesRef : NgxGoogleLocationAutocompleteDirective;

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