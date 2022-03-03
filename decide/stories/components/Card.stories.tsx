import Card from '../../components/Card/Card'

export default {
    title: "Components/Card",
    component: Card,
};

export const CardA = () : JSX.Element  => <Card name="Auto kaufen?" icon="No" />
export const CardB = () : JSX.Element  => <Card name="Auto leasen?" icon="Yes"/>