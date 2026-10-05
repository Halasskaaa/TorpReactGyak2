type TorpProps = {
    torpNeve: string;
    torpKora: number;
    torpJogsi: boolean;
    muvelet: () => void;
};

export function Torp(props: TorpProps)  {
    return  <>
        <h2>{props.torpNeve}</h2>
        <p>Kora: {props.torpKora}</p>
        <p>(
            {props.torpJogsi ? "Igen" : "Nem"}
            )</p>
        <button onClick={props.muvelet}>Megtekintés</button>
    </>
}