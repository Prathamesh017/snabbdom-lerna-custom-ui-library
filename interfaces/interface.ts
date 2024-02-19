
export interface customElementInterface{
  elementType: string
    props: {
      style?:{
        [key:string]:string
      }
      on?:{
        click:()=>void
      }
    },
    state:any
}