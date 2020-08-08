export default interface ProductTypesInterface
{
    id: number,
    type: TypeInterface,
}

export type TypeInterface = "simple" | "configurable";
