import React, { Component } from "react";
import Container from "../Container/container";


function formformat() {
    return (
        <div>
            <Container>
                <h1>Add a New URL</h1>
                <form>
                    <div class="mb-3">
                        <label className="col-sm-2 col-form-label">Website Name:</label>
                        <input
                            name="URL Name"
                            type="text"
                            placeholder="Enter Name for your Website"
                        />
                    </div>
                    <div class="mb-3">
                        <label className="col-sm-2 col-form-label">Website URL:</label>
                        <input
                            name="URL Link"
                            type="text"
                            placeholder="URL Link"
                        />
                    </div>
                    <div id="passwordHelpBlock" class="form-text">
                        Must including http:// or https:// to be submitted
                </div>
                    <div class="mb-3">
                        <label for="formGroupExampleInput2" class="form-label">Website Description</label>
                        <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Please Add a Website Description" />
                    </div>
                    <div class="mb-3">
                        <label className="col-sm-2 col-form-label">Employee Name:</label>
                        <input
                            name="Employee Name"
                            type="text"
                            placeholder="Enter your full Name"
                        />
                    </div>
                    <button className='btn btn-primary'>Submit Website</button>
                </form>
            </Container>

        </div>
    );
}

export default formformat