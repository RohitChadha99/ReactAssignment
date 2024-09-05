import React from "react";

const styles = {
    card: {
        margin: '10px',
        // width: '250px',
        // height: '260px',
        backgroundColor: '#f7f9fc',
        borderRadius: '10px',
        padding: '1px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
    },
    title:{
        borderLeft: '3px solid #0077c6',
        marginLeft: '-1px',
        fontWeight: '400',
        fontSize: '16px',
        paddingLeft: '50px',
        paddingRight: '20px'
    }
    // title: {
    //     margin: '0',
    //     padding: '0',
    //     fontSize: '10px',
    //     color: '#333',
    // },
    // content: {
    //     display: 'flex',
    //     flexDirection: 'column',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     marginTop: '20px',
    // },
    // icon: {
    //     fontSize: '48px',
    //     color: '#b0b0b0',
    // },
    // text: {
    //     fontSize: '16px',
    //     color: '#888',
    //     marginTop: '10px',
    // },
};

const Card = (props) => {
    console.log(props);
    return (
        <div style={styles.card}>
            <p style={styles.title}>{props.title}</p>
            <div style={styles.content}>
                <i className="fa fa-laptop" style={styles.icon}></i>
                {props.children}
            </div>
        </div>
    )
}

export default Card;