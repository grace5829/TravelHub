import styled from "styled-components";
import { useContext } from "react";
import { GuestsContext } from "..";

const TableWrapper = styled.span`
margin: 10px;
display: flex;
justify-content: center;
flex-wrap: wrap;
`;

const EachGuest = styled.div`
display: grid;
grid-template-columns: 30px 200px 100px 60px 100px 100px 50px;
`;

const EachGuestInfo = styled.span`
border: 1.5px solid black;
display: flex;
justify-content: center;
`;

export default function GuestList() {
    const { guests, setGuests } = useContext(GuestsContext);

    const removeGuest=(index:number)=>{
        if(setGuests && guests?.splice(index, 1))
            setGuests(guests?.splice(index, 1))
    }
    
    return (
        <TableWrapper>
        <EachGuest>
          <EachGuestInfo>#</EachGuestInfo>
          <EachGuestInfo>Name</EachGuestInfo>
          <EachGuestInfo>RSVP</EachGuestInfo>
          <EachGuestInfo>Age</EachGuestInfo>
          <EachGuestInfo>Gender</EachGuestInfo>
          <EachGuestInfo>Amount Due</EachGuestInfo>
        </EachGuest>

        {guests?.map((guest, index) => (
          <EachGuest key={guest.lastName + guest.firstName}>
            <EachGuestInfo>{index}</EachGuestInfo>
            <EachGuestInfo>
              {guest.firstName} {guest.lastName}
            </EachGuestInfo>
            <EachGuestInfo>{guest.RSVP}</EachGuestInfo>
            <EachGuestInfo>{guest.age} </EachGuestInfo>
            <EachGuestInfo>{guest.gender}</EachGuestInfo>
            <EachGuestInfo>${guest.amountDue}</EachGuestInfo>
            <button onClick={()=>removeGuest(index)}>-</button>
          </EachGuest>
        ))}
      </TableWrapper>
    );
  }
  