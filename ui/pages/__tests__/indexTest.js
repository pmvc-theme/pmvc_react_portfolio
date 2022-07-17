import { expect } from "chai";
import { render, act, waitFor } from "reshow-unit";

import IndexPage from "../index";

describe("EventTimeline Test", () => {
  it("basic test", async () => {
    const wrap = render(<IndexPage />);
    await waitFor(() => {
      act(() => expect(wrap.html()).to.have.string("div"));
    });
  });
});
