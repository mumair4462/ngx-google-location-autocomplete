export interface Photo {
    height: number;
    html_attributions: string[];
    width: number;

    getUrl(request: PhotoRequest): string;
}

export interface PhotoRequest {
    maxWidth: number;
    maxHeight: number;
}