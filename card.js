import { StyleSheet } from "react-native-web";

const card = StyleSheet.create({
    card: {
        width: "calc(220px + 20vw)",
        boxShadow: "0px 4px 19px -2px rgba(41,53,68,0.35)",
        transition: "all .2s",
    },
    card__img: {
        flex: 1,
    },
    img: {
        flex: 1,
        objectFit: "cover",
    },
    card__content: {
        justifyContent: "space-between",
        padding: "calc(10px + 1vmax)",
        backgroundColor: "#210210",
        position: "relative",
    },
    title: {
        fontSize: 'calc(10px + 2.5vw)',
        color: "#fff",
    },
    subtitle: {
        fontSize: 'calc(10px + 1.5vw)',
        color: "#fff",
        marginBottom: "calc(2px + 1vh)",
    },
    description: {
        fontSize: 'calc(8px + 0.5vw)',
        color: "#C4C4C4",
    },
    isHovered: {
        height: "50%",
    },
    notHovered: {
        display: "none",
    },
    button: {
        position: "absolute",
        top: "calc(10px + 1.2vw)",
        right: "calc(20px + 1vw)",
        width: "calc(40px + 1.2vw)",
        height: "calc(40px + 1.2vw)",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        fontSize: "calc(15px + 1vw)",
        color: "#fff",
        backgroundColor: "#54B689",
    }
})

export default card
