import { View, Text, Image, TouchableOpacity } from "react-native";
import card from "./card";
import { useState } from "react";

export default function Card({ info }) {

    const [isHovered, setIsHovered] = useState(false);

    const mouseEnter = () => {
        setIsHovered(true);
    };

    const mouseOut = () => {
        setIsHovered(false);
    };

    const firstUrl = 'https://api.otaviolube.com';

    return (
        <View
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseOut}
            style={{
                ...card.card,
                height: isHovered ? "calc(220px + 20vw)" : "calc(120px + 15vh)",
            }}
        >
            <View style={card.card__img}>
                <Image
                    source={{ uri: firstUrl + info.attributes.poster.data.attributes.url }}
                    style={card.img}>
                </Image>
            </View>
            <View style={[
                card.card__content,
                isHovered ? card.isHovered : card.notHovered,
            ]}
            >
                <Text style={card.title}>{info.attributes.titulo}</Text>
                <Text style={card.subtitle}>{info.attributes.subtitulo}</Text>
                <Text style={card.description}>{info.attributes.sinopse}</Text>
                <TouchableOpacity style={card.button}>▶</TouchableOpacity>
            </View>
        </View>
    );
}
