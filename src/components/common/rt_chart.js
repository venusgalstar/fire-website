import React, { useEffect, useCallback, useState } from "react";
import ReactDOM from "react-dom";
import { createChart } from "lightweight-charts";
import { data } from "./consts.js";
import { connect, useSelector } from "react-redux";
import moment from 'moment-business-days';


function App(props) {
    var fire_Value = useSelector(store => store.fire_value);
    const [areaSeries, setArea] = useState(null);
    const [data, setSeriesData] = useState([]);
    const [updateInterval, setUpdateInterval] = useState(0);

    useEffect(() => {
        init();
    }, []);

    useEffect(() => {
        if (fire_Value == 0) {
            return;
        }
        setSeriesData((prevData) => {
            if (prevData.length > 1 ) {
                return prevData.concat({ time: moment(new Date((new Date()).getTime() + updateInterval * 3600 * 24 * 1000)).format("YYYY-MM-DD"), value: fire_Value });
            } else {
                return prevData.concat({ time: moment(new Date()).format("YYYY-MM-DD"), value: fire_Value });
            }
        });
        if (areaSeries != null) {
            areaSeries.setData(data);
        }
    }, [updateInterval]);
    


    const init = useCallback(() => {
        var chart = createChart(document.getElementById("chart1"), {
            width: 500,
            height: 330,
            priceScale: {
                scaleMargins: {
                    top: 0.3,
                    bottom: 0.25
                },
                borderVisible: false
            },
            layout: {
                backgroundColor: "#2f3136",
                textColor: "#d1d4dc"
            },
            grid: {
                vertLines: {
                    color: "rgba(42, 46, 57, 0)"
                },
                horzLines: {
                    color: "rgba(42, 46, 57, 0.6)"
                }
            },
            timeScale: {
                visible: false,
            },
        });

        setArea(
            chart.addAreaSeries({
                topColor: "rgba(200,150,86, 0.56)",
                bottomColor: "rgba(200,150,86, 0.04)",
                lineColor: "rgba(200,150,86, 1)",
                lineWidth: 2
            })
        );
        const getData = function() {
            props.dispatch({ type: "GET_FIRE_VALUE" });
            setUpdateInterval((prev) => {
                return prev + 1;
            });
            if(timeIndex > 1) {
                setTimeout(getData, 6000);
            } else {
                setTimeout(getData, 1000);
            }
            timeIndex++;
        }
        let timeIndex = 0;
        setTimeout(() => {
            getData();
        }, 10);
    }, []);
    return (
        <div className="App">
            <div id="chart1" />
        </div>
    );
}



const mapStateToProps = state => {
    return { fire_value: state.fire_value };
}

const mapDispatchToProps = dispatch => {
    return dispatch;
}

export default connect(mapDispatchToProps)(App);