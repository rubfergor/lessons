/*
- Quiero que creéis una clase, llamada User, con un constructor que acepte un email, un balance inicial,
  y un booleano llamado isVip. Ojo, el parametro de entrada va a ser un objeto (es decir, el constructor acepta un objeto llamado 
  params que tendrá las propiedades que he dicho antes). La clase tendrá las mismas propiedades (pero TODAS PRIVADAS) que el
  objeto de entrada, y además una string llamada registerDate (también privada) que será una cadena ISO de la fecha de creación 
  del usuario, que será la fecha actual menos un número aleatorio entre 0 y 5 años antes.
- La clase tiene que tener un método privado que diga si el usuario es VIP o no (_checkVip)
- Un método privado que formatee la fecha para que se una string YYYY/MM/DD (_formatDate)
- Un método público getUser que devuelve los datos del usuario, con la fecha formateada a un formato entendible por un humano
- Un método público llamado setVip que acepte un booleano y cambie el estado de Vip del usuario
- Un método público estático (normalizeRegistrationData) que acepte un email, y devuelva un objeto que permita 
  inicializar la clase (con vip =false y balance 0) con el mail proporcionado

- Un método público estático (checkVipStatus) que acepte un objeto de usuario y que devuelva 
  el mismo usuario si isVip=true, o undefined si isVip=false
*/

import {add, format} from 'date-fns';

type Params = {
  email: string;
  balance: number;
  isVip: boolean;
};

export class User {
  private email: string;
  private balance: number;
  private isVip: boolean;
  private registerDate: string;
  public constructor(params: Params) {
    this.email = params.email;
    this.balance = params.balance;
    this.isVip = params.isVip;
    //La fecha de registro se establece entre un margen de -5 años hasta la actualidad
    this.registerDate = add(new Date(), {
      years: Math.floor(Math.random() * (0 - -5 + 1) + -5)
    }).toISOString();
  }
  //Formateo de la fecha para que en el getUser devuelva el objeto con la fecha más legible
  private _formatDate = () => format(new Date(this.registerDate), 'yyyy-MM-dd');
  public getUser = () => {
    return {
      email: this.email,
      balance: this.balance,
      isVip: this.isVip,
      registerDate: this._formatDate()
    };
  };
  //@ts-expect-error
  private _checkVIP = () => this.isVip;

  //Método público para cambiar el estado de Vip
  public setVIP = (set: boolean) => (this.isVip = set);

  //Normalize para que solo acepte un email y pueda usarse en la clase
  public static normalizeRegistrationData = (email2: string) => {
    return {email: email2, balance: 0, isVip: false};
  };
  //checkVipStatus devuelve el objeto de usuario si Vip = true, o undifined si Vip = false
  public static checkVipStatus = (params: Params) =>
    params.isVip ? params : undefined;
}
