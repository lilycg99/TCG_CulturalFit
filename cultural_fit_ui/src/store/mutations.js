
export default {
    
    //To Change Candidate General View to Candidate Detailed View
    detailed_view_change_step (state){
        state.detailed_view_step = 0;
        alert(state.detailed_view_step);
        state.drawer = true;
        
    },

    profiles_evaluation_view_change_step (state, index){
        state.selected_candidate.name = state.candidates.at(index).name;
        state.selected_candidate.label = state.candidates.at(index).label;
        state.detailed_view_step = 1;
        state.drawer = false;

    },

    //To Change in Candidate Detailed View from Option 1: Culture Profile to Option 2: Engagement
    detailed_view_option1_change_step (state){
        state.detailed_view_options_step = 1
    },

    detailed_view_option2_change_step (state){
        state.detailed_view_options_step = 2
    },

    //Save New Label
    add_new_label (state, newlabel){
        state.labels_list.push (newlabel),
        state.newlabel_dialog = false
    },

    get_label_index (state, label){
       return state.labels_list.indexOf (label);
    },

    splice_label (state, index){
        if (index !== -1){
            var label = state.labels_list.at(index);
            state.labels_list.splice(index, 1);
            for(const candidate of state.candidates){
                if(candidate.label === label){
                    candidate.label = '';
                }
            }
        }   
    },


    //Table Options
    delete_label_candidate (state, index){
        state.candidates.at(index).label = '';
    },
    
    put_label_candidate (state, list){
        var index = list.at(0);
        var newlabel = list.at(1);
        state.candidates.at(index).label = newlabel;
    }



        
    
}
