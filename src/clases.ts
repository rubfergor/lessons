class User {
    public name: string
    public balance: number
    public registeredOn: string
    private isVip?: boolean
    public constructor(foobar: string) {
        this.name = foobar
        this.balance = 0 
        this.registeredOn = new Date().toISOString()
        this.isVip = false
    }

    public getBalance = () => {
        return this.isVip? this.balance * 2 : this.balance
    }
    //public getBalance = () => (this.isVip? this.balance * 2 : this.balance)
}

const user = new User('Bob')

console.log(user.getBalance()) 

export {}