import { Button, Table } from "antd";

const Niveis = () => {
    return (
        <div>
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-3x1 font-bold">Niveis</h2>
                <Button
                    type="primary"
                    icon={LuPlus />}

                >Novo nivel</Button>
            </div>

            <div>
<Table>
    <Table.Column 
    title="Nome" 
    dataIndex="nome"

</Table>


            </div>
        </div>
    );
}

export default Niveis;