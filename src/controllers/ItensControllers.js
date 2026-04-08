const Itens = require('../models/Itens');

class ItensController {
    static async create(req, res) {
        try {
            const { nameItens, descricao, numItens, condicao } = req.body;

            if (!nameItens || !descricao || numItens === undefined || condicao === undefined) {
                return res.status(400).json({ message: "Dados inválidos." });
            }
            const itemData = {
                nameItens,
                descricao,
                numItens,
                condicao
            };
            const newItem = await Itens.create(itemData);

            return res.status(201).json({message: 'Item criado com sucesso',data: newItem});
        } catch (error) {
            return res.status(500).json({message: 'Erro ao criar item',error: error.message});
        }
    }
    static async getAll(req, res) {
        try {
            const itens = await Itens.find();
            return res.status(200).json({ data: itens });
        } catch (error) {
            return res.status(500).json({message: 'Erro ao buscar itens',error: error.message});
        }
    }
    static async getById(req, res) {
        try {
            const { id } = req.params;
            const item = await Itens.findById(id);

            if (!item) {
                return res.status(404).json({ message: 'Item não encontrado' });
            }

            return res.status(200).json({ data: item });

        } catch (error) {
            return res.status(500).json({message: 'Erro ao buscar item',error: error.message});
        }
    }
    static async update(req, res) {
        try {
            const { id } = req.params;
            const { nameItens, descricao, numItens, condicao } = req.body;

            const updatedData = {
                nameItens,
                descricao,
                numItens,
                condicao
            };
            const updatedItem = await Itens.findByIdAndUpdate(id, updatedData, { new: true });

            if (!updatedItem) {
                return res.status(404).json({ message: 'Item não encontrado' });
            }
            return res.status(200).json({message: 'Item atualizado com sucesso',data: updatedItem});
        } catch (error) {
            return res.status(500).json({message: 'Erro ao atualizar item',error: error.message});
        }
    }
    static async delete(req, res) {
        try {
            const { id } = req.params;

            const deletedItem = await Itens.findByIdAndDelete(id);
            if (!deletedItem) {
                return res.status(404).json({ message: 'Item não encontrado' });
            }
            return res.status(200).json({message: 'Item deletado com sucesso'});
        } catch (error) {
            return res.status(500).json({message: 'Erro ao deletar item',error: error.message});
        }
    }
}
module.exports = ItensController;