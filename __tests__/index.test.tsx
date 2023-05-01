import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Home from "@/pages"

describe("Home", () => {
  it("renders a heading", () => {
    const { container } = render(<Home />)

    const heading = screen.getByRole("heading", {
      name: /next app/i,
    })
    const justButton = screen.getByRole("button", {
      name: /just/i,
    })

    expect(container).toMatchSnapshot()
    expect(heading).toBeInTheDocument()
    expect(justButton).toBeInTheDocument()
  })

  it("should call a fn once when clicking just button", async () => {
    const mockButtonClick = jest.fn()

    render(<Home />)

    const justButton = screen.getByRole("button", {
      name: /just/i,
    })

    justButton.onclick = mockButtonClick
    await userEvent.click(justButton)

    expect(mockButtonClick).toHaveBeenCalledTimes(1)
  })
})
