export default {

    //Signin Data Form
    signin_form: {
        full_name : '',
        email : '',
        company_name : '',
        password : ''
    },

    //Login Data Form
    login_form: {
        email : '',
        password : ''
    },

    //Dashboard Layout 
    user_info: {
        full_name: 'Gonzalo Pinto',
        email: '',
        company_name: 'The Cloud Group',
        avatar: '@/assets/TheCloudLogo.jpg'
    },

    //Dashboard View

    //Received Answers
    summary : 15,

    //Corporate Culture Profile Chart Data Set
    culture_profile_chart : {
        culture_aspects : ["People", "ESG", "Norms", "Goals", "Digital", "Innovation"],
        predominance_values : [70, 50, 90, 45, 70, 50]

    },



    table_data: [
     
        {
            name: "Goals",
            amount: 45,
            
        },
        {
            name: "Innovation",
            amount: 50,
            
          },
          {
            name: "ESG",
            amount: 50,
            
          },
          {
            name: "People",
            amount: 70,
            
          },
          {
            name: "Digital",
            amount: 70,
            
          },
       
          {
            name: "Norms",
            amount: 90,
           
          },
      ],



    //Profiles Evaluation View

    detailed_view_step : 0,

    //Profiles Evaluation View -> Candidate Detailed View
    detailed_view_options_step: 1,

    //Profiles Evaluation View -> Candidate Detailed View -> Culture Profile
    prevailing_principles : [
        {
            value : 'Lealtad',
            text: ''
        },
        {
            value : 'Compromiso',
            text: ''
        },
        {
            value : 'Trabajo en equipo',
            text: ''
        },
        {
            value : 'Dinamismo',
            text: ''
        },
        {
            value : 'Perseverancia',
            text: ''
        },
        {
            value : 'Confianza',
            text: ''
        },
    ],



    drawer: true,
    search_table: '',

    //Profiles Evaluation -> Candidates General View -> Candidates Table

    table_headers : [
        '',
        'Email/Nombre de Usuario',
        'Nombre Completo', 
        'Género',
        'Fit Org. Individual',
        'Fit Org. Desarrollo',
        'ICDE',
        'Arq. Individual Dominante',
        'Cultura Org. Deseada',
        'Etiquetas',
        'Acciones'
    ],

    candidates: [
        {
            avatar: '@/assets/TheCloudLogo.jpg',
           email_user: 'code.lover@example.com',
           name: 'Jane Cooper',
           gender: 'Femenino',
           fit_ind: 60.5,
           fit_dev:  60.5,
           icde: 30,
           dominant_individual_arq: 'People',
           desired_org_culture: 'People',
           label: 'Técnico',
           show: true
        },
        {
            avatar: '@/assets/TheCloudLogo.jpg',
            email_user: 'code.lover@example.com',
            name: 'Jane Cooper',
            gender: 'Femenino',
            fit_ind: 60.5,
            fit_dev:  60.5,
            icde: 30,
            dominant_individual_arq: 'People',
            desired_org_culture: 'People',
            label: 'Directivo',
            show: true
         },
         {
            avatar: '@/assets/TheCloudLogo.jpg',
            email_user: 'code.lover@example.com',
            name: 'Jane Cooper',
            gender: 'Femenino',
            fit_ind: 60.5,
            fit_dev:  60.5,
            icde: 30,
            dominant_individual_arq: 'People',
            desired_org_culture: 'People',
            label: '',
            show: true
         },
         {
            avatar: '@/assets/TheCloudLogo.jpg',
           email_user: 'code.lover@example.com',
           name: 'Jane Cooper',
           gender: 'Femenino',
           fit_ind: 60.5,
           fit_dev:  60.5,
           icde: 30,
           dominant_individual_arq: 'People',
           desired_org_culture: 'People',
           label: 'Marketing',
           show: true
        },
        {
            avatar: '@/assets/TheCloudLogo.jpg',
            email_user: 'code.lover@example.com',
            name: 'Jane Cooper',
            gender: 'Femenino',
            fit_ind: 60.5,
            fit_dev:  60.5,
            icde: 30,
            dominant_individual_arq: 'People',
            desired_org_culture: 'People',
            label: 'Directivo',
            show: true
         },
         {
            avatar: '@/assets/TheCloudLogo.jpg',
            email_user: 'code.lover@example.com',
            name: 'Jane Cooper',
            gender: 'Femenino',
            fit_ind: 60.5,
            fit_dev:  60.5,
            icde: 30,
            dominant_individual_arq: 'People',
            desired_org_culture: 'People',
            label: '',
            show: true
         },
         {
            avatar: '@/assets/TheCloudLogo.jpg',
            email_user: 'code.lover@example.com',
            name: 'Jane Cooper',
            gender: 'Femenino',
            fit_ind: 60.5,
            fit_dev:  60.5,
            icde: 30,
            dominant_individual_arq: 'People',
            desired_org_culture: 'People',
            label: 'Marketing',
            show: true
         }
    ],

    //Selected Candidate to see details
    selected_candidate: {
        name: '',
        label: '',
    },

    //Labels List to Label Menu in Candidate General View
    labels_list : [
        'Directivo',
        'Técnico',
        'Marketing'
    ],

    //Candidate General View -> Label Menu
    newlabel_dialog: false,
    newlabel_alert: false








    

}
