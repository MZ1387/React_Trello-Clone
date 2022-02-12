import { ColumnContainer, ColumnTitle, CardContainer } from "./styles";

// define the form of your props object
type ColumnProps = {
    text: string
}

export const Column = ({ text }: ColumnProps) => {
    return (
        <ColumnContainer>
            <ColumnTitle>{text}</ColumnTitle>
            <CardContainer>Task One</CardContainer>
            <CardContainer>Task Two</CardContainer>
            <CardContainer>Task Three</CardContainer>
        </ColumnContainer>
    )
}