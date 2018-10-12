import { Model, PrimaryKey, IMetaModel, IModel } from 'that-simple-model'

/**
 * An example of a SingleKey model
 */
@Model({
	description: 'Description',
	kind: 'SingleKey'
})
export class SingleKey implements IModel {
	static meta: IMetaModel
	meta: IMetaModel

	@PrimaryKey
	hash: string

	title: string
}

export const singleKey = new SingleKey()
singleKey.hash = 'ABC'
singleKey.title = 'Test Item'
