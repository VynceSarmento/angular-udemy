import { Contatos } from "./contatos";
import { InMemoryDbService } from "angular-in-memory-web-api";


export class InMemoryDataService implements InMemoryDbService {

    createDb(): {} {

        let contatos: Contatos[] = [
            {
                id: 1,
                nome: "Fulano de Tal",
                telefone: "(00)0000-0000",
                email: "fulano@teste.com"
            },
            {
                id: 2,
                nome: "Teste Sobrenome",
                telefone: "(00)0000-0001",
                email: "teste@teste.com"
            },
            {
                id: 3,
                nome: "Nome Completo",
                telefone: "(00)0000-0010",
                email: "completo@teste.com"
            },
            {
                id: 4,
                nome: "Nome Sobrenome",
                telefone: "(00)0000-0100",
                email: "n.sobrenome@teste.com"
            },
            {
                id: 5,
                nome: "V S C S",
                telefone: "(00)0000-1000",
                email: "vinicius@teste.com"
            },
            // {
            //     id: 6,
            //     nome: "Maria",
            //     telefone: "11-12345678",
            //     email: "maria@provedor.com"
            // },
            // {
            //     id: 7,
            //     nome: "Pedro",
            //     telefone: "12-55698745",
            //     email: "pedro@provedor.com"
            // },
            // {
            //     id: 8,
            //     nome: "João",
            //     telefone: "21-78542359",
            //     email: "joao@provedor.com"
            // },
            // {
            //     id: 9,
            //     nome: "Tiago",
            //     telefone: "27-25854567",
            //     email: "tiago@provedor.com"
            // },
            // {
            //     id: 10,
            //     nome: "Carla",
            //     telefone: "33-31595187",
            //     email: "carla@provedor.com"
            // },
            // {
            //     id: 11,
            //     nome: "Estela",
            //     telefone: "21-98652938",
            //     email: "estela@provedor.com"
            // },
            // {
            //     id: 12,
            //     nome: "Lucas",
            //     telefone: "71-87241548",
            //     email: "lucas@provedor.com"
            // },
            // {
            //     id: 13,
            //     nome: "Mariana",
            //     telefone: "85-33984526",
            //     email: "mariana@provedor.com"
            // },
            // {
            //     id: 14,
            //     nome: 'Fulano de Tal',
            //     email: 'fulano@email.com',
            //     telefone: '(00) 0001-0000'
            // },
            // {
            //     id: 15,
            //     nome: 'Ciclano',
            //     email: 'ciclano@email.com',
            //     telefone: '(00) 0010-0000'
            // },
            // {
            //     id: 16,
            //     nome: 'Escatamaquio',
            //     email: 'escatamaquio@email.com',
            //     telefone: '(00) 0100-0000'
            // },
            // {
            //     id: 17,
            //     nome: 'Seu madruga',
            //     email: 'madruga@email.com',
            //     telefone: '(00) 1000-0000'
            // },
            // {
            //     id: 18,
            //     nome: 'Bob Esponja',
            //     email: 'bob@email.com',
            //     telefone: '(00) 0000-1111'
            // },
        ];

        return {
            'contatos': contatos,
        };

    }

}