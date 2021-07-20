
export type Client = {
   id: number,
   name: string,
   cpf: number,
   birthday: number
   statement: Statement[]
}

export type Statement = {
   description: string,
   date: Date,
   quantity: number,
}

export type Transactions = {
   nameFrom: string,
   cpfFrom: number,
   nameTo: string,
   cpfTo: number,
   quantity: number,
   date: Date
}
