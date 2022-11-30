import './Brilli.scss';

export const Brilli = ({ nombre = 'Botón' , href }) => {
    return (
        <a className="Brilli" href={ href }>{ nombre }</a>
    )
}