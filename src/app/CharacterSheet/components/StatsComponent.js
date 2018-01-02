// Base component for Character sheet with checks
import CSBaseComponent from '../CSBaseComponent'
// View template for the component
import Template from '../views/Stats.template'

export default class StatsComponent extends CSBaseComponent {
    constructor(props) {
        super(props);

        this.statsObject = this.props.characterObject.get("stats").toJS();
    }

    updateCharacter() {
        // Do work here
        super.updateCharacter();
    }

    render() {
        return Template.bind(this)();
    }
}

