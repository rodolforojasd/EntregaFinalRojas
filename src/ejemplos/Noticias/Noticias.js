import { Tutores } from '../Tutores/Tutores'

export const Noticias = ( {children} ) => {
    // console.log( props.children )

    const styles = {
        margin: '40px auto',
        maxWidth: '800px',
        fontSize: '20px',
        color: 'red'
    }

    return (
        <div style={styles}>
            <h4>Noticias de hoy</h4>
            <hr/>
            {children}
        </div>
    )
}

// export default Noticias