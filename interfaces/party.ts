interface Party {
    id?: string,
    name?: string,
    date?: Date,
    address: Address,
    message: string,
    obs: string
}

interface Address {
    bairro?: string,
    cep?: string,
    complemento?: string,
    ddd?: string,
    gia?: string,
    ibge?: string,
    localidade?: string,
    logradouro?: string,
    siafi?: string,
    uf?: string,
}