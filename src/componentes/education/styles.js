import styled from 'styled-components';

export const EducationContainer = styled.div`
    margin-top: 100px;
`

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export const TableHeader = styled.th`
    padding: 15px;
    text-align: left;
    background-color: #4caf50;
    color: white;
`;

export const TableData = styled.td`
    padding: 15px;
    border-bottom: 1px solid #ddd;
`;

export const TableRow = styled.tr`
    &:hover {
        background-color: rgb(99, 113, 148);
        cursor: pointer;
    }
`;


export const DetailsRow = styled.tr`
    display: ${props => (props.show ? 'table-row' : 'none')};
    background-color: ${props => (props.show ? 'rgb(99, 113, 148)' : 'none')}; 
`;