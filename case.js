export default class app {
  render() {
    // indent after return
    return (
      <div className={cx(props.className, style.calendar)}
        style={{
          height: 100,
          width: 100
        }}
      />
      <div render={() => {
        console.log(3)
      }} />
      <div render={() => {
        console.log(3)
      }} />
      <div render={() => {
        console.log(3)
      }} />
      <div style={
          height: 50
      }/>
      <div
        style={
        }
      ></div>
      <div
        style={
          width: 100,
          height: 100
        }
        x="fw"
      />
      <div
        style={
        }
        x="a"
      ></div>
    )
  }
  render() {
    // indent after return
    return <div></div>
  }
  render() {
    return (
      <div></div>
    )
  }
  render() {
    // do block
    return (
      <div>
        {do {
          if (1) {
            <span></span>
          }
        }}
      </div>
    )
  }
}
class Hoge extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
    if (foo <= 300) {
      return <div style={{margin:0}}>
        Hello world
      </div>
    }
  }

  hoge() {
    Hoge.poge(
      <div>
        <div></div>
        {this.hoge}
        <div></div>
      </div>
    );
  }

  renderHoge() {
    return (
      <div
        foo={
          <bar foo='aaa' >
            <div
              hoge={
                <div
                  hoge={'aaa'}
                ></div>
              }
            />
          </bar>
        }
      >
        <span>hoge</span>
      </div>
    );
  }

  render() {
    return (
      <div>
      </div>
      <div>
        {(hoge => {
          if (hoge) {
            return <div />;
          }
        })()}
      </div>
    );
  }
}

export const Hoge = () => (
  <div>
    <div
      hoge={aaa}
      hoge={aaa}
    ></div>
    <div
      hoge="aa"
    />
  </div>
)

ReactDOM.render(
  <div>
    <div>
      {/* jsx comment */}
    </div>
    <div></div>
    <div></div>
  </div>,
  document.getElementById('body');
)

const hoge = () => {
  ReactDOM.render(
    <div></div>,
    document.getElementById('body');
  );
}

export default Hoge;
