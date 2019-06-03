function getName(name){
    alert(name);
};

var TranDuc = React.createClass({
    // addDay (){
    //     this.setState({tongSoNgay: this.state.tongSoNgay +1});
    // },
    layThongTin: function() {
        alert(this.props.children);
    },
    getInitalState(){
        return {tongSoNgay: 0};
    },
        render : function(){
            return(
                <div>
                    <h1 className="color"> {this.props.ten} - {this.props.time}</h1>
                    <p>{this.props.children}</p>
                    <div>So Ngay: {this.state.tongSoNgay}</div>
                    <button onClick={()=>{var str =this.props.ten + ' ' + this.props.time; getName(str)}}>LAY THONG TIN</button>
                    <KhoaHoc/>
                </div>
            );
        }
    });
var KhoaHoc = React.createClass({
    render: function(){
        return(
            <h3>work hard</h3>
        );
    }
});

ReactDOM.render( 
    <div>
        <TranDuc ten = "ReactJS" time = "3 week">Mon hoc Reactjs</TranDuc>
        <TranDuc ten = "NodeJS" time = "2 week">Mon hoc NodeJs</TranDuc>
    </div>

, document.getElementById("root"));