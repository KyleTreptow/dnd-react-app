// Base component for Character sheet with checks
import CSBaseComponent from '../CSBaseComponent'
// View template for the component
import Template from '../views/Stats.template'

export default class StatsComponent extends CSBaseComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return Template.bind(this)();
    }
}

