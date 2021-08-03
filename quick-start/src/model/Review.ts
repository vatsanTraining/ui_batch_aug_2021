export interface Props{
       id:number;reviewerName?:string;review:string;rating:number;
    
    }
    
    export interface ShowProp{
        review:Props;
      }
    

    export interface ShowAllProp{
            reviewList:Props[];
          }
        