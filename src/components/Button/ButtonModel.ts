export type ButtonProps = {
    className: string;
    children: string;
    type:"button"|"reset"|"submit";
    value:string | number;
    toggleBtn: boolean;
    onClick:()=>void;
}
 