var TranDuc = React.createClass({

    layThongTin: function() {
        alert(this.props.children);
    },
        render : function(){
            return(
                <div>
                    <h1 className="color"> {this.props.ten} - {this.props.time}</h1>
                    <p>{this.props.children}</p>
                    <button onClick={this.layThongTin}>LAY THONG TIN</button>
                    <KhoaHoc/>
                </div>
            );
        }
    });
var KhoaHoc = React.createClass({
    render: function(){
        return(
            <h3>2 week</h3>
        );
    }
});

ReactDOM.render( 
    <div>
        <TranDuc ten = "ReactJS" time = "3 week">Mon hoc Reactjs</TranDuc>
        <TranDuc ten = "NodeJS" time = "2 week">Mon hoc NodeJs</TranDuc>
    </div>

, document.getElementById("root"));