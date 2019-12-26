export interface IHeaderComponentData {

    businessTitle: string;

    headerButtons: IHeaderButton[];
}

export interface IHeaderButton {

    buttonTitle: string;

    routerLink: string;

    showButton: boolean;
}