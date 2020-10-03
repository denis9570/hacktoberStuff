console.log('Hello world');
console.log('Welcome to this very useful JS file!')

const runText = ([first, ...rest]) => [...rest, first].join('')
const runTextReverse = (arr) => [arr.slice(-1), ...arr.slice(0, -1)].join('')

// Angular
const app = angular.module('app', []);

app.controller('AngularController', function AngularController($scope) {
  $scope.string = 'Stuff';
  $scope.message = 'Welcome!';
  setInterval(() => {
    $scope.message = runText($scope.message);
    $scope.$apply();
  }, 300);
});

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

// React

const cre = React.createElement;

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: 'Hello World! '
    }
    setInterval(() => this.setState({ text: runTextReverse(this.state.text) }), 100)
  }

  render() {
    return cre(
      'h1',
      {},
      cre(
        'span',
        { className: 'badge badge-light' },
        this.state.text
      )
    );
  }
}

const container = document.querySelector('[ng-controller="ReactController"]');
ReactDOM.render(cre(App), container)
