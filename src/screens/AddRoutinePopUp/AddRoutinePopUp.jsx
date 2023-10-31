import React from "react";
import { HomeIndicator } from "../../components/HomeIndicator";
import { StatusBar } from "../../components/StatusBar";
import { VuesaxLinearAddWrapper } from "../../components/VuesaxLinearAddWrapper";
import { VuesaxLinearArrowRight1 } from "../../icons/VuesaxLinearArrowRight1";
import { VuesaxLinearArrowSquare1 } from "../../icons/VuesaxLinearArrowSquare1";
import { VuesaxLinearCloseCircle1 } from "../../icons/VuesaxLinearCloseCircle1";
import { VuesaxLinearHeart1 } from "../../icons/VuesaxLinearHeart1";
import { VuesaxLinearNotification1 } from "../../icons/VuesaxLinearNotification1";
import { VuesaxLinearProfile1 } from "../../icons/VuesaxLinearProfile1";
import "./style.css";

export const AddRoutinePopUp = () => {
  return (
    <div className="add-routine-pop-up">
      <div className="div-3">
        <StatusBar
          className="status-bar-instance"
          darkMode={false}
          dynIslSize="n-a"
          dynamicIsland={false}
          notch="/img/notch-2.png"
          notchClassName="design-component-instance-node"
          wifi="/img/wifi-4.svg"
        />
        <div className="frame">
          <div className="text-wrapper-2">Routines ⛳</div>
          <div className="frame-2">
            <img className="vuesax-linear" alt="Vuesax linear" src="/img/vuesax-linear-location.svg" />
            <p className="p">You have 2 Active Routines currently</p>
          </div>
        </div>
        <div className="overlap">
          <div className="group">
            <div className="overlap-group">
              <div className="frame-3">
                <div className="frame-4">
                  <img className="vuesax-linear-home" alt="Vuesax linear home" src="/img/vuesax-linear-home.svg" />
                  <div className="ellipse" />
                </div>
                <div className="frame-4">
                  <VuesaxLinearHeart1 className="icon-instance-node" />
                </div>
                <div className="frame-4">
                  <VuesaxLinearNotification1 className="icon-instance-node" />
                </div>
                <div className="frame-4">
                  <VuesaxLinearProfile1 className="icon-instance-node" />
                </div>
              </div>
              <img className="line" alt="Line" src="/img/line-3.svg" />
            </div>
          </div>
          <HomeIndicator className="home-indicator-instance" darkMode={false} />
        </div>
        <div className="vuesax-linear-arrow-wrapper">
          <VuesaxLinearArrowRight1 className="vuesax-linear-arrow" />
        </div>
        <div className="overlap-2">
          <div className="frame-wrapper">
            <div className="frame-5">
              <VuesaxLinearAddWrapper />
              <VuesaxLinearArrowSquare1 className="vuesax-linear-arrow-square-1" />
              <div className="text-wrapper-3">Add Routines</div>
            </div>
          </div>
          <img className="vuesax-linear-add-2" alt="Vuesax linear add" src="/img/vuesax-linear-add-2.png" />
        </div>
        <div className="overlap-3">
          <div className="div-wrapper">
            <div className="frame-6">
              <div className="text-wrapper-4">Create Your Own</div>
            </div>
          </div>
          <div className="frame-7">
            <div className="frame-8">
              <div className="text-wrapper-4">Import from Template</div>
            </div>
          </div>
          <p className="you-can-create-your">
            You can create your own customized Routines
            <br />
            with list of maximum 7 reminders that you want to be reminded about
          </p>
          <p className="text-wrapper-5">
            Import from the Routines created by our team and customize individual list items according to your need!
          </p>
          <VuesaxLinearCloseCircle1 className="vuesax-linear-close" />
        </div>
      </div>
    </div>
  );
};
