import React, { useEffect, useCallback, useState } from "react";
import ReactDOM from "react-dom";
import { createChart } from "lightweight-charts";
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
        getUsersCount();
    }, [updateInterval]);


    const getUsersCount = () => {
        const requestOptions = {
            method: 'POST'
        };
        fetch('https://phoenix-statistics.herokuapp.com/get_daily_nest', requestOptions)
            .then(response => response.json())
            .then(data => {
                var list = [];
                for (var i = 0; i < data.data.length; i++) {
                    list.push({time: data.data[i]._id, value: data.data[i].count});
                }
                if (areaSeries != null) {
                    areaSeries.setData(list);
                }
            });
    }



    const init = useCallback(() => {
        var chart = createChart(document.getElementById("chart2"), {
            width: 700,
            height: 400,
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
                visible: true,
            },
        });

        setArea(
            chart.addAreaSeries({
                topColor: "rgba(243,126,86, 0.56)",  
                bottomColor: "rgba(200,150,86, 0.04)",
                lineColor: "rgba(231,81,30, 1)",  
                lineWidth: 2
            })
        );
        const getData = function () {
            setUpdateInterval((prev) => {
                return prev + 1;
            });
                    }
        
        setTimeout(() => {
            getData();
        }, 1000);
    }, []);
    return (
        <div className="App">
            <div id="chart2" />
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