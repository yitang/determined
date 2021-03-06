package actor

// Message holds the communication protocol between actors. Actors can send messages to other actors
// and receive messages from other actors.
type Message interface{}

// Actor lifecycle messages.
type (
	// PreStart notifies the actor before its reference is started.
	PreStart struct{}

	// ChildStopped is a message notifying the actor when a child has stopped.
	ChildStopped struct {
		Child *Ref
	}

	// ChildFailed is a message notifying the actor that one of its children has failed.
	ChildFailed struct {
		Child *Ref
		Error error
	}

	// PostStop notifies the actor that its reference is shutting down.
	PostStop struct{}
)

// Actor is an object that encapsulates both state and behavior.
type Actor interface {
	// Receive defines the actor's behavior. Receive is called for each message in the inbox until
	// a request to stop is received or the parent shuts the actor down.
	Receive(context *Context) error
}
