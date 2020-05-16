import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
// import "mutationobserver-shim";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const { getByText } = render(<CheckoutForm />);

    const header = getByText(/checkout form/i);

    expect(header).toBeInTheDocument();
});

test("must render", () => {
    const {   getByTestId} = render(<CheckoutForm />);

    getByTestId("firstName");
    getByTestId("lastName");
    getByTestId("address");
    getByTestId("city");
   getByTestId("state");
    getByTestId("zip");
});

test("can type in fields", () => {
    const { getByTestId } = render(<CheckoutForm />)
    const firstnameInput = getByTestId('firstName')
    const lastnameInput = getByTestId('lastName')
    const addressInput = getByTestId("address");
    const cityInput = getByTestId('city')
    const stateInput = getByTestId("state");
    const zipInput = getByTestId("zip");

    fireEvent.change(firstnameInput, { target: { value: 'John' } })
    expect(firstnameInput.value).toBe('John')
    fireEvent.change(lastnameInput, { target: { value: 'Doe' } })
    expect(lastnameInput.value).toBe('Doe')
    fireEvent.change(addressInput, { target: { value: 'here' } })
    expect(addressInput.value).toBe('here')
    fireEvent.change(cityInput, { target: { value: 'there' } })
    expect(cityInput.value).toBe('there')
    fireEvent.change(stateInput, { target: {value:"some state"}})
    expect(stateInput.value).toBe("some state")
    fireEvent.change(zipInput, { target: { value: "12345" } })
    expect(zipInput.value).toBe("12345")
})

test("can submit filled form", async () => {
    

    const { getByTestId } = render(<CheckoutForm />)
    const firstnameInput = getByTestId('firstName')
    const lastnameInput = getByTestId('lastName')
    const addressInput = getByTestId("address");
    const cityInput = getByTestId('city')
    const stateInput = getByTestId("state");
    const zipInput = getByTestId("zip");

    fireEvent.change(firstnameInput, { target: { value: 'John' } })
    expect(firstnameInput.value).toBe('John')
    fireEvent.change(lastnameInput, { target: { value: 'Doe' } })
    expect(lastnameInput.value).toBe('Doe')
    fireEvent.change(addressInput, { target: { value: 'here' } })
    expect(addressInput.value).toBe('here')
    fireEvent.change(cityInput, { target: { value: 'there' } })
    expect(cityInput.value).toBe('there')
    fireEvent.change(stateInput, { target: { value: "some state" } })
    expect(stateInput.value).toBe("some state")
    fireEvent.change(zipInput, { target: { value: "12345" } })
    expect(zipInput.value).toBe("12345")

    fireEvent.click(getByTestId('button'))
    await waitForElement(() => getByTestId('successMessage'))
   

})

