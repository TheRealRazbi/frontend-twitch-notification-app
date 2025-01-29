
import javax.swing.*;
import java.awt.*;
import java.util.ArrayList;

public class ExampleApp {
    private JFrame frame;
    private JTextField nameField, surnameField, salaryField, tariffField, advanceField;
    private JButton addButton, showLastButton;
    private JList<Angajat> employeeList;
    private DefaultListModel<Angajat> employeeModel;
    private JLabel detailLabel;


    private ArrayList<Angajat> employees = new ArrayList<>();

    public ExampleApp() {
        frame = new JFrame("Example App");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(400, 400);
        frame.setLayout(new BorderLayout());


        JPanel inputPanel = new JPanel(new GridLayout(5, 2));
        inputPanel.add(new JLabel("Name:"));
        nameField = new JTextField();
        inputPanel.add(nameField);

        inputPanel.add(new JLabel("Surname:"));
        surnameField = new JTextField();
        inputPanel.add(surnameField);

        inputPanel.add(new JLabel("Salary:"));
        salaryField = new JTextField();
        inputPanel.add(salaryField);

        inputPanel.add(new JLabel("Tariff:"));
        tariffField = new JTextField();
        inputPanel.add(tariffField);

        inputPanel.add(new JLabel("Advance:"));
        advanceField = new JTextField();
        inputPanel.add(advanceField);


        frame.add(inputPanel, BorderLayout.NORTH);


        JPanel buttonPanel = new JPanel();
        addButton = new JButton("Add Person");
        showLastButton = new JButton("Show Last Person");
        buttonPanel.add(addButton);
        buttonPanel.add(showLastButton);
        frame.add(buttonPanel, BorderLayout.CENTER);


        employeeModel = new DefaultListModel<>();
        employeeList = new JList<>(employeeModel);
        frame.add(new JScrollPane(employeeList), BorderLayout.WEST);


        detailLabel = new JLabel("Select a person to view details.");
        frame.add(detailLabel, BorderLayout.SOUTH);


        addButton.addActionListener(e -> addEmployee());
        showLastButton.addActionListener(e -> showLastEmployee());
        employeeList.addListSelectionListener(e -> showSelectedEmployee());

        frame.setVisible(true);
    }

    private void addEmployee() {
        try {
            String name = nameField.getText();
            String surname = surnameField.getText();
            double salary = Double.parseDouble(salaryField.getText());
            double tariff = Double.parseDouble(tariffField.getText());
            double advance = Double.parseDouble(advanceField.getText());

            Angajat employee = new Angajat(name, surname, salary, tariff, advance);
            employees.add(employee);
            employeeModel.addElement(employee);


            nameField.setText("");
            surnameField.setText("");
            salaryField.setText("");
            tariffField.setText("");
            advanceField.setText("");
        } catch (NumberFormatException ex) {
            JOptionPane.showMessageDialog(frame, "Please enter valid numeric values for salary, tariff, and advance.");
        }
    }

    private void showLastEmployee() {
        if (!employees.isEmpty()) {
            Angajat lastEmployee = employees.get(employees.size() - 1);
            JOptionPane.showMessageDialog(frame, "Last Person:\n" + lastEmployee);
        } else {
            JOptionPane.showMessageDialog(frame, "No people added yet.");
        }
    }

    private void showSelectedEmployee() {
        Angajat selected = employeeList.getSelectedValue();
        if (selected != null) {
            detailLabel.setText("Details: " + selected.getName() + " " + selected.getSurname() +
                    ", Salary: " + selected.getSalary() + ", Tariff: " + selected.getTariff() +
                    ", Advance: " + selected.getAdvance());
        }
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(ExampleApp::new);
    }
}
