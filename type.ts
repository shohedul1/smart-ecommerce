export interface Products {
            id: number,
            attributes: {
                title: string,
                isNew: boolean,
                oldPrice: number,
                price: number,
                description: string,
                category: string,
                rating: number,
                quantity: number,
                image: {
                    data: {
                        attributes: {
                            url: string,
                        }
                    }
                }
            }
        }
    




export interface ItemProps {
    item: Products;
}