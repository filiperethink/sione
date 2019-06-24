import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { Dimensions, TouchableOpacity, View, Text } from "react-native";

// Styles
import { styles } from "./CarouselStyle";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

// Images
import images from "../../../../assets/images/index";
const { illustrations } = images;

class Slide extends Component {
  state = {
    slider1ActiveSlide: 0
  };

  handleText = (t1, t2) => {
    return (
      <Fragment>
        <Text style={styles.incomeAlert}>{t1}</Text>
        <Text style={styles.incomeAlert}>{t2}</Text>
      </Fragment>
    );
  };

  _renderItem = ({ item, index }, parallaxProps) => {
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.wrapperIncome}
        onPress={() => {
          alert(`You've clicked '${item.text}'`);
        }}
      >
        <Text style={styles.incomeText}>{item.text}</Text>
        <View style={styles.incomeWrapper}>
          <Text style={styles.incomeMoney}>R$</Text>
          <Text
            style={[
              item.id === "profit" && styles.incomeValue,
              item.id === "debit" && styles.debitValue,
              item.id === "invest" && styles.investValue
            ]}
          >
            {item.value}
          </Text>
        </View>
        <Fragment>
          {item.id === "profit" &&
            this.handleText(
              "Você guardou R$250,00",
              "no mês passado.",
              "profit"
            )}
          {item.id === "debit" &&
            this.handleText(
              "Você Economizou R$1.050,00",
              "nesse mês.",
              "debit"
            )}
          {item.id === "invest" &&
            this.handleText(
              "Seus Investimento rendeu",
              "R$150,00 nesse mês.",
              "invest"
            )}
        </Fragment>
      </TouchableOpacity>
    );
  };

  render() {
    const { data } = this.props;
    const { slider1ActiveSlide } = this.state;

    return (
      <View style={styles.wrapperCarousel}>
        <Carousel
          ref={c => (this._slideRef = c)}
          layout="default"
          sliderWidth={screenWidth}
          activeAnimationType="decay"
          sliderHeight={screenHeight}
          itemWidth={screenWidth - 60}
          data={data}
          firstItem={0}
          snapToAlignment="center"
          activeAnimationType={"spring"}
          activeAnimationOptions={{
            friction: 5,
            tension: 10
          }}
          renderItem={this._renderItem}
          onSnapToItem={index => this.setState({ slider1ActiveSlide: index })}
        />
        <Pagination
          dotsLength={data.length}
          activeDotIndex={slider1ActiveSlide}
          containerStyle={styles.paginationContainer}
          dotColor={"#857CBF"}
          dotStyle={styles.paginationDot}
          inactiveDotColor={"#CEC9EE"}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
          carouselRef={this._slideRef}
          tappableDots={!!this._slideRef}
        />
      </View>
    );
  }
}

Slide.propTypes = {
  data: PropTypes.array.isRequired
};

export default Slide;
