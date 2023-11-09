import {
  ContactListStyle,
  BtnDelCont,
   ItemContLst,
} from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux'
import { deleteContact } from 'components/redux/contactSlice';
import {getConactFromState} from 'components/redux/contactSlice'
import { getFilter } from 'components/redux/filterSlice';

export const ContactList = () => {
const isContacts = useSelector(getConactFromState);
const filterCont  = useSelector(getFilter);

const getFilterContacts = ()=>{
   if (!filterCont.filter) {
    return isContacts;
    }
 return isContacts.filter(contact=>contact.name.toUpperCase().includes(filterCont.filter.toUpperCase())
 )
}

const dispatch = useDispatch();
  const onRemoveContact =(id)=>{
    dispatch(deleteContact(id))
  }
   return (
    <ContactListStyle>
       {getFilterContacts().map(el => {
        return (
          <ItemContLst key={el.id}>
            <BtnDelCont type="button" onClick={() => onRemoveContact(el.id)}>
              del
            </BtnDelCont>
            {el.name} : {el.number}
          </ItemContLst>
        );
      })}
    </ContactListStyle>
  );
};
