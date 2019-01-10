//BEGIN-SNIPPET showcase
import Component from '@ember/component';
import {set} from '@ember/object';

export default Component.extend({

  init(){
    this._super(...arguments);
    this.set('colorList', ["RED", "BLUE", "GREEN"]);
    this.set('selectedColor', "RED");
    this.set('data', {
      "TR": 100,
      "US": 90,
      "TZ": 80,
      "DE": 70,
      "RU": 60,
      "IN": 50,
      "AU": 40,
      "BR": 30,
      "NG": 20
    });
  },

  actions: {

    changeColor(newColor){
      this.set('selectedColor', newColor);
    },

    updateTrValue(event){
      set(this.get('data'), "TR", event.target.value);
      this.set('data', JSON.parse(JSON.stringify(this.get('data'))));
    }

  }

});
//END-SNIPPET
