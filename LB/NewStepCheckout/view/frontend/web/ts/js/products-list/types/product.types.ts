export default interface ProductTypesInterface
{
    attribute_set_id: number,
    created_at: string,
    custom_attributes: [],
    id: number,
    name: string,
    price: number,
    sku: string,
    status: string,
    type: TypeInterface,
}

export type TypeInterface = "simple" | "configurable";
