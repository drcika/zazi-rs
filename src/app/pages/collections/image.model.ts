import { SrcUrl } from './image.url.model'; 

export class ImageModel {
  public okoLavirinta: any;
  public dontTouchme: any;
  public myWorld: any;
  public commercialShoes: any;
  public srcUrl: SrcUrl[];

  constructor(
    okoLavirinta: any,
    dontTouchme: any,
    myWorld: any,
    commercialShoes: any,
    srcUrl: SrcUrl[]
  )
  
  {
    this.okoLavirinta = okoLavirinta;
    this.dontTouchme = dontTouchme;
    this.myWorld = myWorld;
    this.commercialShoes = commercialShoes;
    this.srcUrl = srcUrl;
  }
} 