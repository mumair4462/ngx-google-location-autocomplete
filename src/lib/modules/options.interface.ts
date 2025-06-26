import { LatLng, LatLngBounds } from "./iCore.interface";

export class ComponentRestrictions {
    public country?: string;

    constructor(obj?: Partial<ComponentRestrictions>) {
        if (!obj)
            return;

        Object.assign(this, obj);
    }
}

export class Options {
    public bounds?: LatLngBounds;
    public componentRestrictions?: ComponentRestrictions;
    public types?: string[];
    public fields?: string[];
    public strictBounds?: boolean;
    public origin?: LatLng;
    public constructor(opt?: Partial<Options>) {
        if (!opt)
            return;

        Object.assign(this, opt);
    }
}