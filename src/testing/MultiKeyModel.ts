import {
	Model,
	PrimaryKey,
	SecondaryKey,
	IMetaModel,
	IModel
} from 'that-simple-model'

/**
 * Example of a MultiKey model
 */
@Model({
	description: 'Description',
	kind: 'MultiKey'
})
export class MultiKey implements IModel {
	static meta: IMetaModel
	meta: IMetaModel

	@PrimaryKey
	hash: string

	@SecondaryKey
	range: string

	title: string
}

export const multiKey = new MultiKey()
multiKey.hash = 'ABC'
multiKey.range = '123'
multiKey.title = 'Test Item'