import { userService } from '../_services';
import { history } from '../_helpers';
import data from '../json/students.json'

export const studentAction = {
    getStudent,
    getStudentById,
    onChangeProps,
    editStudentInfo,
    createStudent,
    deleteStudentById
};

function getStudent(){
    return dispatch => {
        let apiEndpoint = 'students';
        userService.get(apiEndpoint)
        .then((response)=>{
            console.log(response);
            dispatch(changeStudentsList(response.data.data));
        }).catch((err)=>{
            console.log("Error");
            dispatch(changeStudentsList(data));
            console.log(err);
        })
    };
}

function createStudent(payload){
    return dispatch => {
        let apiEndpoint = 'students/';
        userService.post(apiEndpoint, payload)
        .then((response)=>{
            dispatch(createUserInfo());
            history.push('/');
        }) 
    }
}

function getStudentById(id){

    return dispatch => {
        let apiEndpoint = 'students/'+ id;
        userService.get(apiEndpoint)
        .then((response)=>{
            dispatch(editStudentsDetails(response.data.data));
        })
    };
}

function onChangeProps(props, event){
    return dispatch =>{
        dispatch(handleOnChangeProps(props, event.target.value));
    }
}

function editStudentInfo(id, payload){
    return dispatch => {
        let apiEndpoint = 'students/'+ id;
        userService.put(apiEndpoint, payload)
        .then((response)=>{
            dispatch(updatedUserInfo());
            history.push('/');
        }) 
    }
}

function deleteStudentById(id){
    return dispatch => {
        let apiEndpoint = 'students/'+ id;
        userService.deleteDetail(apiEndpoint)
        .then((response)=>{
            dispatch(deleteStudentsDetails());
            dispatch(studentAction.getStudent());
        })
    };
}

export function changeStudentsList(student){
    return{
        type: "FETECHED_ALL_STUDENT",
        student: student
    }
}

export function handleOnChangeProps(props, value){
    return{
        type: "HANDLE_ON_CHANGE",
        props: props,
        value: value
    }
}

export function editStudentsDetails(student){
    return{
        type: "STUDENT_DETAIL",
        id: student._id,
        name: student.name,
        mobile: student.mobile,
        phone_number: student.phone_number,
        address: student.address
    }
}

export function updatedUserInfo(){
    return{
        type: "USER_UPDATED"
    }
}

export function createUserInfo(){
    return{
        type: "USER_CREATED_SUCCESSFULLY"
    }
}

export function deleteStudentsDetails(){
    return{
        type: "DELETED_STUDENT_DETAILS"
    }
}