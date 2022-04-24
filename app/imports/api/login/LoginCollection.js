import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import { check } from 'meteor/check';
import { _ } from 'meteor/underscore';
import { Roles } from 'meteor/alanning:roles';
import BaseCollection from '../base/BaseCollection';

class LoginCollection extends BaseCollection {
  constructor() {
    super('Login', new SimpleSchema({
      username: String,
      password: String,
      url: String
    }));
  }

  /** 
   * Defines a new Login item
   * @param username
   * @param password
   * @param url
   * @return {String} the docID of the new document
   */
  define({ username, password, url }) {
    const docID = this._collection.insert({
      username,
      password,
      url,
    });
    return docID;
  }

  /**
   * Updates the given document.
   * @param docID the id of the document to update.
   * @param name the new name (optional).
   * @param quantity the new quantity (optional).
   * @param condition the new condition (optional).
   */
   update(docID, { name, quantity, condition }) {
    const updateData = {};
    if (name) {
      updateData.name = name;
    }
    // if (quantity) { NOTE: 0 is falsy so we need to check if the quantity is a number.
    if (_.isNumber(quantity)) {
      updateData.quantity = quantity;
    }
    if (condition) {
      updateData.condition = condition;
    }
    this._collection.update(docID, { $set: updateData });
  }

  /**
   * A stricter form of remove that throws an error if the document or docID could not be found in this collection.
   * @param { String | Object } name A document or docID in this collection.
   * @returns true
   */
  removeIt(name) {
    const doc = this.findDoc(name);
    check(doc, Object);
    this._collection.remove(doc._id);
    return true;
  }

  /**
   * Default publication method for entities.
   * It publishes the entire collection for admin and just the stuff associated to an owner.
   */
  publish() {
    if (Meteor.isServer) {
      // get the StuffCollection instance.
      const instance = this;
      /** This subscription publishes only the documents associated with the logged in user */
      Meteor.publish(stuffPublications.stuff, function publish() {
        if (this.userId) {
          const username = Meteor.users.findOne(this.userId).username;
          return instance._collection.find({ owner: username });
        }
        return this.ready();
      });

      /** This subscription publishes all documents regardless of user, but only if the logged in user is the Admin. */
      Meteor.publish(stuffPublications.stuffAdmin, function publish() {
        if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
          return instance._collection.find();
        }
        return this.ready();
      });
    }
  }

  /**
   * Subscription method for stuff owned by the current user.
   */
  subscribeStuff() {
    if (Meteor.isClient) {
      return Meteor.subscribe(stuffPublications.stuff);
    }
    return null;
  }

  /**
   * Subscription method for admin users.
   * It subscribes to the entire collection.
   */
  subscribeStuffAdmin() {
    if (Meteor.isClient) {
      return Meteor.subscribe(stuffPublications.stuffAdmin);
    }
    return null;
  }

}

/**
 * Provides the singleton instance of this class to all other entities.
 */
export const Logins = new LoginCollection();